var count = 0;

function print(pos) {
    count++;
    if (pos > -1)
        console.log(count, ". found at position ", pos);
    else
        console.log(count, ". not found");
}

print("nnda".search(/n*.a/));
print("nna".search(/n*a/));
print("a".search(/n*a/));
print("a".search(/n.*a/));
print("nda".search(/n.*a/));
print("naa".search(/n.*a/));
print("ana".search(/n.*a/));
print("nddna".search(/n.a/));
print("nnada".search(/n*a*d/));
print("naaada".search(/n*a*d/));
print("d".search(/n*a*d/));
print("x".search(/n*a*d/));
print("nnaed".search(/nn*a*d/));
print("abcdefff23334".search(/.*a.*ff*23335*4/));
print("abcdefff23334".search(/ff*23335*/));
// print("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxy".search(/(x+x+)+y/));
print("acb".search(/a.b/));
print("abc".search(/abc/));
print("xbc".search(/abc/));
print("axc".search(/abc/));
print("abx".search(/abc/));
print("xabcy".search(/abc/));
print("ababc".search(/abc/));
print("abc".search(/ab*c/));
print("abc".search(/ab*bc/));
print("abbc".search(/ab*bc/));
print("abbbbc".search(/ab*bc/));
print("abbc".search(/ab+bc/));
print("abc".search(/ab+bc/));
print("abq".search(/ab+bc/));
print("abbbbc".search(/ab+bc/));
print("abbc".search(/ab?bc/));
print("abc".search(/ab?bc/));
print("abbbbc".search(/ab?bc/));
print("abc".search(/ab?c/));
// print("abc".search(/^abc$/));
// print("abcc".search(/^abc$/));
// print("abcc".search(/^abc/));
// print("aabc".search(/^abc$/));
// print("aabc".search(/abc$/));
// print("abc".search(/^/));
// print("abc".search(/$/));
print("abc".search(/a.c/));
print("axc".search(/a.c/));
print("axyzc".search(/a.*c/));
print("axyzd".search(/a.*c/));
print("abc".search(/a[bc]d/));
print("abd".search(/a[bc]d/));
print("abd".search(/a[b-d]e/));
print("ace".search(/a[b-d]e/));
print("aac".search(/a[b-d]/));
print("a-".search(/a[-b]/));
print("a-".search(/a[\\-b]/));
print("a]".search(/a]/));
print("a]b".search(/a[\]]b/));
print("aed".search(/a[^bc]d/));
print("abd".search(/a[^bc]d/));
print("adc".search(/a[^-b]c/));
print("a-c".search(/a[^-b]c/));
print("a]c".search(/a[^]b]c/));
print("adc".search(/a[^]b]c/));
