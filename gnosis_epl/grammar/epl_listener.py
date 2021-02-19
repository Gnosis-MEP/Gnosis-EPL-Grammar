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

    def int_or_str_cast(self, value):
        try:
            return int(value)
        except ValueError:
            return value

    def enterWindow(self, ctx):
        args = [self.int_or_str_cast(arg.getText()) for arg in ctx.window_arg_list().window_arg()]
        window = {
            'window_type': ctx.window_type().getText(),
            'args': args
       }
        self.query['window'] = window

    def enterQuery_name(self, ctx):
        self.query['name'] = ctx.getText()

    def enterContent(self, ctx):
        self.query['content'] = [c.getText() for c in ctx.content_service()]

    def enterPublisher_list(self, ctx):
        self.query['from'] = [p.getText() for p in ctx.publisher()]

    def visitErrorNode(self, node):
        raise GnosisEPLParserException(node)
