from .GnosisEPLListener import GnosisEPLListener


class GnosisEPLParserException(RuntimeError):
    """
    Exception raised by any error during the parse of the query
    """

    def __init__(self, node):
        payload = node.getPayload()
        symbol = node.getText()
        message = "Error parsing query. '{}' is not valid in the line {}:{}".format(
            symbol,
            payload.line,
            payload.column,
            payload
        )
        self.message = message
        self.node = node
        super(GnosisEPLParserException, self).__init__(message)


class ToDictionaryEPLListener(GnosisEPLListener):

    def __init__(self):
        self.query = {}

    def enterQuery_name(self, ctx):
        self.query['name'] = ctx.getText()

    def visitErrorNode(self, node):
        raise GnosisEPLParserException(node)
