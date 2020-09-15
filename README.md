# Gnosis EPL Grammar

## Installing Dependencies

### Using pipenv
Run `$ pipenv shell` to create a python virtualenv and load the .env into the environment variables in the shell.

Then run: `$ pipenv install` to install all packages, or `$ pipenv install -d` to also install the packages that help during development, eg: ipython.
This runs the installation using **pip** under the hood, but also handle the cross dependency issues between packages and checks the packages MD5s for security measure.


### Using pip
To install from the `requirements.txt` file, run the following command:
```
$ pip install -r requirements.txt
```

## Build
Build the antlr4 grammar using: `antlr4 -Dlanguage=Python3 GnosisEPL.g4`