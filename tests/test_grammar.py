import unittest
from gnosis_epl.main import T

class TestStringMethods(unittest.TestCase):

    def test_upper(self):
        t = T()
        self.assertEqual('foo'.upper(), 'FOO')
