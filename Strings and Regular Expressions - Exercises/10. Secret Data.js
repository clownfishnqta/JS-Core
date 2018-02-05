function secretData(params) {
    let hideOptions = {
        name: (str, replacement = '|') =>
            str.replace(/\*[A-Z][A-Za-z]*(?=\t| |$)/gm, match => replacement.repeat(match.length)),
        phoneNumber: (str, replacement = '|') =>
            str.replace(/\+[0-9\-]{10}(?=\t| |$)/gm, match => replacement.repeat(match.length)),
        id: (str, replacement = '|') =>
            str.replace(/![A-Za-z0-9]+(?=\t| |$)/gm, match => replacement.repeat(match.length)),
        username: (str, replacement = '|') =>
            str.replace(/_[A-Za-z0-9]+(?=\t| |$)/gm, match => replacement.repeat(match.length))
    };

    for (let i = 0; i < params.length; i++) {
        params[i] = hideOptions.name(params[i]);
        params[i] = hideOptions.phoneNumber(params[i]);
        params[i] = hideOptions.id(params[i]);
        params[i] = hideOptions.username(params[i]);
    }

    return params.join('\n');
}