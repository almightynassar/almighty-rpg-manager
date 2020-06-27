#!/bin/bash

# Explicitly declare an associative array
declare -A options
branch=`git rev-parse --abbrev-ref HEAD`

# Checkout and rebase master
checkoutMaster () {
    git checkout -q master
    git reset --hard origin/master
}

# Download the latest master and set it's history
echo -e "Downloading the \e[31mmaster\e[0m branch from \e[31morigin\e[0m"
git fetch --all --tags --prune-tags -q
git fetch -q origin master:master

# Remove any references to defunct branches on remote repository from local
echo -e "Cleaning up \e[31morigin\e[0m"
git remote prune origin

# Read and set options
while getopts ":adilstw" opt; do
    case ${opt} in
        a) options[a]=1;;
        d) options[d]=1;;
        i) options[i]=1;;
        l) options[l]=1;;
        s) options[s]=1;;
        t) options[t]=1;;
        w) options[w]=1;;
        \? ) # Print the help
            echo "Usage: ./git.sh [-a|-d|-m|-t]"
            echo -e "\t\e[31m-a:\e[0m\tRemoves all local branches"
            echo -e "\t\e[31m-d:\e[0m\tAsk before removing local branches"
            echo -e "\t\e[31m-i:\e[0m\tInstall NPM and composer dependencies"
            echo -e "\t\e[31m-l:\e[0m\tDelete the log file"
            echo -e "\t\e[31m-s:\e[0m\tRun the php server (and npm watch)"
            echo -e "\t\e[31m-t:\e[0m\tAdds the git template to your config"
            echo -e "\t\e[31m-w:\e[0m\tStay in the current branch"
        ;;
    esac
done

# Checkout master by default
if [ -z ${options[w]} ]
then
    checkoutMaster
fi

# Add the git template
if [ ${options[t]} ]
then
    echo -e "Adding global git template"
    git config commit.template .gitlab/git-template.txt
fi

# Ask about removing local branches
if [ ${options[d]} ]
then
    echo -e "Interactively removing local branches that are not \e[31mmaster\e[0m"
    branches=$(git branch | grep -v "\*" | grep -v "master")
    for b in $branches
    do
        read -p "Are you sure you want to delete $b? " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]
        then
            git branch -D $b
        fi
    done
fi

# Remove all local branches
if [ ${options[a]} ]
then
    echo -e "Removing all local branches that are not \e[31mmaster\e[0m"
    git branch | grep -v "\*" | grep -v "master" | xargs -n 1 git branch -D
fi

# Install NPM and Composer dependencies
if [ ${options[i]} ]
then
    echo -e "Installing NPM dependencies:"
    npm install
    echo -e "Installing composer dependencies:"
    composer install
fi

# Delete the log file
if [ ${options[l]} ]
then
    echo -e "Removing the log file:"
    rm storage/logs/laravel.log
    touch storage/logs/laravel.log
fi

# Run the php server and npm watch
if [ ${options[s]} ]
then
    echo -e "\e[31mRunning the server\e[0m"
    tail -f ./storage/logs/laravel.log &
    npm run watch &
    php artisan serve
fi
