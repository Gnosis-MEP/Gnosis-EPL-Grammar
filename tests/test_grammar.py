import unittest
from gnosis_epl.main import QueryParser
from gnosis_epl.grammar.epl_listener import GnosisEPLParserException


class TestGnosisEPLGrammar(unittest.TestCase):

    def setUp(self):
        self.parser = QueryParser()

    def tearDown(self):
        pass

    def test_query_name_is_correctly_parsed(self):
        query_text = """REGISTER QUERY my_first_query
            OUTPUT K_GRAPH_JSON
            CONTENT ObjectDetection, ColorDetection
            MATCH (c1:Car {color:'blue'}) AND (c2:Car {color:'white'})
            FROM teste
            WITHIN TUMBLING_COUNT_WINDOW(2)
            RETURN *"""
        query_dict = self.parser.parse(query_text)
        self.assertIn('name', query_dict)
        self.assertEqual(query_dict['name'], 'my_first_query')

    def test_query_name_exception_when_invalid(self):
        query_text = """REGISTER QUERY Invalid Query Name
            OUTPUT K_GRAPH_JSON
            CONTENT ObjectDetection, ColorDetection
            MATCH (c1:Car {color:'blue'}) AND (c2:Car {color:'white'})
            FROM teste
            WITHIN TUMBLING_COUNT_WINDOW(2)
            RETURN *"""

        with self.assertRaises(GnosisEPLParserException):
            query_dict = self.parser.parse(query_text)
