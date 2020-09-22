from antlr4 import *

from grammar.GnosisEPLLexer import GnosisEPLLexer
from grammar.GnosisEPLParser import GnosisEPLParser
from grammar.custom_listener import CustomEPLListener
from grammar.error_handler import GnosisErrorListener


def main(subscription):
    errorListener = None
    try:
        lexer = GnosisEPLLexer(InputStream(subscription))
        stream = CommonTokenStream(lexer)
        parser = GnosisEPLParser(stream)
        error_list = []
        parser.removeErrorListeners()
        errorListener = GnosisErrorListener(error_list)
        parser.addErrorListener(errorListener)
        tree = parser.query()

        printer = CustomEPLListener()
        walker = ParseTreeWalker()
        walker.walk(printer, tree)
    except Exception as e:
        print(e)

    print('Error: ')
    print(errorListener.output)


if __name__ == '__main__':
    main("REGISTER QUERY testQuery "
         "OUTPUT ANN_IMAGE "
         "CONTENT object_detection "
         "MATCH (p:Person {label:'PERSON'}) OPTIONAL MATCH (c:Car)<-[TEMPORAL:RIGHT]->(t:Truck) "
         "WHERE c.color='blue' "
         "FROM pub01 "
         "WITHIN TUMBLING_TIME_WINDOW(30) "
         #"WITH_QoS CONFIDENCE > 70 "
         "RETURN c,p")
