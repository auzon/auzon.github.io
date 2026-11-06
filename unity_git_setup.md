# How to Setup a Git Repository for a Unity Project

## Go to the root folder of your project

```bash
cd ~/MyProject
```

## Check if a git repository already exists

```bash
git status
```

## Initialize the git repository

```bash
git init
```
## Install git LFS

```bash
git lfs install
```

## Add prepopulated .gitattributes

```bash
curl https://gist.githubusercontent.com/auzon/9d03f8fe66ea9d9d373b202e22f965ca/raw/8d0fbeac4909ba2016403485322f56faddb33660/.gitattributes > .gitattributes
```

## Add prepopulated .gitignore

```bash
curl https://gist.githubusercontent.com/auzon/ed91580f5dd2bee85b12742fea987453/raw/331038a4d727ce0e45121cf7f2387accdc508f80/.gitignore > .gitignore
```

## Check your changes

```bash
git status
```

## Stage your changes

```bash
git add -A
```

## Check your staged changes

```bash
git status
```

## Make Your Initial Commit

```bash
git commit -m "Initial commit"
```

## Done
