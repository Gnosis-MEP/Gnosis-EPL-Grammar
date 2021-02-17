# Gnosis EPL Grammar

## Installing Dependencies
### Java
If you need to re-generate the automatic grammar files created from ANTLR4, then you'll need Java installed (tested with version 11.0.7 OpenJDK). Otherwise, you can ignore this dependency.

### Using pipenv
Run `$ pipenv shell` to create a python virtualenv and load the .env into the environment variables in the shell.

Then run: `$ pipenv install` to install all packages, or `$ pipenv install -d` to also install the packages that help during development, eg: ipython.
This runs the installation using **pip** under the hood, but also handle the cross dependency issues between packages and checks the packages MD5s for security measure.


### Using pip
To install from the `requirements.txt` file, run the following command:
```
$ pip install -r requirements.txt
```

## Rebuilding Grammar (ANTRL-4)
execute:
```
$ ./gen_antrl_files.sh
```
This will recreate the .py files and copy(override) the ones in the grammar module with this newly created ones.