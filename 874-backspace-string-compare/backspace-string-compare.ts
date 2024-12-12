function backspaceCompare(s: string, t: string): boolean {
   return realText(s) == realText(t);
}

function realText(str: string): string {
    const result = [];

    for(const ch of str) {
        if(ch !== '#') result.push(ch);
        else if (result.length > 0) result.pop();
    }

    return result.join('');
}
