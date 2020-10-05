# ABOUT

Caesar Cipher CLI can decode/encode text from the command line or .txt file and write in the command line or another .txt file. Encoding process inspired by [Caesar's encryption algorithm](https://en.wikipedia.org/wiki/Caesar_cipher).

# USAGE EXAMPLE

CLI tool accept four options (short alias and full name):

-s, --shift: a shift  
-i, --input: an input file  
-o, --output: an output file  
-a, --action: an action encode/decode  

**Examples**

```sh
$ node app -a encode -s 3 -i "./input.txt" -o "./output.txt"
$ node app --action encode --shift 5 --input plain.txt --output encoded.txt
$ node app --action decode --shift 4 --input decoded.txt --output plain.txt
```

After starting caesar-cipher application read data, then decode/encoded it, and write data.
