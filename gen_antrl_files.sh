#!/bin/bash
java -Dfile.encoding=UTF-8 -jar tools/antlr/antlr-4.8-complete.jar -Dlanguage=Python3 tools/antlr/GnosisEPL.g4
cp -rf tools/antlr/*.py gnosis_epl/grammar/