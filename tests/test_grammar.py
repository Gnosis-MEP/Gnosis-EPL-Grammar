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
            FROM test
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
            FROM test
            WITHIN TUMBLING_COUNT_WINDOW(2)
            RETURN *"""

        with self.assertRaises(GnosisEPLParserException):
            query_dict = self.parser.parse(query_text)

    def test_from_is_correctly_parsed_when_single_value(self):
        query_text = """REGISTER QUERY my_first_query
            OUTPUT K_GRAPH_JSON
            CONTENT ObjectDetection, ColorDetection
            MATCH (c1:Car {color:'blue'}) AND (c2:Car {color:'white'})
            FROM test
            WITHIN TUMBLING_COUNT_WINDOW(2)
            RETURN *"""
        query_dict = self.parser.parse(query_text)
        self.assertIn('from', query_dict)
        self.assertEqual(query_dict['from'], ['test'])

    def test_from_is_correctly_parsed_when_multi_value(self):
        query_text = """REGISTER QUERY my_first_query
            OUTPUT K_GRAPH_JSON
            CONTENT ObjectDetection, ColorDetection
            MATCH (c1:Car {color:'blue'}) AND (c2:Car {color:'white'})
            FROM test, test2
            WITHIN TUMBLING_COUNT_WINDOW(2)
            RETURN *"""
        query_dict = self.parser.parse(query_text)
        self.assertIn('from', query_dict)
        self.assertEqual(query_dict['from'], ['test', 'test2'])

    def test_from_is_correctly_parsed_when_asterisk_value(self):
        query_text = """REGISTER QUERY my_first_query
            OUTPUT K_GRAPH_JSON
            CONTENT ObjectDetection, ColorDetection
            MATCH (c1:Car {color:'blue'}) AND (c2:Car {color:'white'})
            FROM *
            WITHIN TUMBLING_COUNT_WINDOW(2)
            RETURN *"""
        query_dict = self.parser.parse(query_text)
        self.assertIn('from', query_dict)
        self.assertEqual(query_dict['from'], ['*'])

    def test_content_is_correctly_parsed_when_single_value(self):
        query_text = """REGISTER QUERY my_first_query
            OUTPUT K_GRAPH_JSON
            CONTENT ObjectDetection
            MATCH (c1:Car {color:'blue'}) AND (c2:Car {color:'white'})
            FROM *
            WITHIN TUMBLING_COUNT_WINDOW(2)
            RETURN *"""
        query_dict = self.parser.parse(query_text)
        self.assertIn('content', query_dict)
        self.assertEqual(query_dict['content'], ['ObjectDetection'])

    def test_content_is_correctly_parsed_when_multiple_values(self):
        query_text = """REGISTER QUERY my_first_query
            OUTPUT K_GRAPH_JSON
            CONTENT ObjectDetection, ColorDetection
            MATCH (c1:Car {color:'blue'}) AND (c2:Car {color:'white'})
            FROM *
            WITHIN TUMBLING_COUNT_WINDOW(2)
            RETURN *"""
        query_dict = self.parser.parse(query_text)
        self.assertIn('content', query_dict)
        self.assertEqual(query_dict['content'], ['ObjectDetection', 'ColorDetection'])

    def test_content_is_correctly_parsed_when_not_present(self):
        query_text = """REGISTER QUERY my_first_query
            OUTPUT K_GRAPH_JSON
            MATCH (c1:Car {color:'blue'}) AND (c2:Car {color:'white'})
            FROM *
            WITHIN TUMBLING_COUNT_WINDOW(2)
            RETURN *"""
        query_dict = self.parser.parse(query_text)
        self.assertNotIn('content', query_dict)

    def test_window_is_correctly_parsed_with_single_arg(self):
        query_text = """REGISTER QUERY my_first_query
            OUTPUT K_GRAPH_JSON
            CONTENT ObjectDetection, ColorDetection
            MATCH (c1:Car {color:'blue'}) AND (c2:Car {color:'white'})
            FROM *
            WITHIN TUMBLING_COUNT_WINDOW(2)
            RETURN *"""
        query_dict = self.parser.parse(query_text)
        excepted_dict = {
            'window_type': 'TUMBLING_COUNT_WINDOW',
            'args': [2]
        }
        self.assertIn('window', query_dict)
        self.assertEqual(query_dict['window'], excepted_dict)

    def test_window_is_correctly_parsed_with_multiple_arg(self):
        query_text = """REGISTER QUERY my_first_query
            OUTPUT K_GRAPH_JSON
            CONTENT ObjectDetection, ColorDetection
            MATCH (c1:Car {color:'blue'}) AND (c2:Car {color:'white'})
            FROM *
            WITHIN TUMBLING_COUNT_WINDOW(2, 1)
            RETURN *"""
        query_dict = self.parser.parse(query_text)
        excepted_dict = {
            'window_type': 'TUMBLING_COUNT_WINDOW',
            'args': [2, 1]
        }
        self.assertIn('window', query_dict)
        self.assertEqual(query_dict['window'], excepted_dict)

    def test_window_is_correctly_parsed_with_mixed_type_arg(self):
        query_text = """REGISTER QUERY my_first_query
            OUTPUT K_GRAPH_JSON
            CONTENT ObjectDetection, ColorDetection
            MATCH (c1:Car {color:'blue'}) AND (c2:Car {color:'white'})
            FROM *
            WITHIN TUMBLING_COUNT_WINDOW(a1b2c, 1)
            RETURN *"""
        query_dict = self.parser.parse(query_text)
        excepted_dict = {
            'window_type': 'TUMBLING_COUNT_WINDOW',
            'args': ['a1b2c', 1]
        }
        self.assertIn('window', query_dict)
        self.assertEqual(query_dict['window'], excepted_dict)
