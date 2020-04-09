function greet(name = null) {
    if (name === null) {
        return 'Hello, my friend';
    } else if (Array.isArray(name)) {
        cap = name.find(n => {
            return n === n.toUpperCase();
        });
        if (cap !== undefined) {
            index = name.findIndex(x => x === cap);

            name[index] = name[name.length - 1];
            name[name.length - 1] = cap;
        } else {
            names = [];
            name.forEach(n => {
                if (n[0] === '"' && n[n.length - 1] === '"') {
                    names.push(n.substring(1, n.length -1));
                } else {
                    nArr= n.split(', ');
                    if (nArr.length > 1) {
                        names.push(nArr[0] + ',');
                        names.push(nArr[1]);
                    } else {
                        names.push(nArr[0]);
                    }
                }
            });
            name = names;
        }
        let greeting = 'Hello, ' + name[0];

        if (name.length === 2) {
        } else {
            for (i = 1; i < name.length - 1; i++) {
                greeting = greeting + ', ' +  name[i];
            }
        }
        if (cap !== undefined) {
            greeting = greeting + ' AND ' + name[name.length - 1] + '.';
        } else {
            greeting = greeting + ' and ' + name[name.length - 1] + '.';
        }
        return greeting;
    } else {
        if (name === name.toUpperCase()) {
            return 'HELLO ' + name + '!';
        } else {
            return 'Hello, ' + name;
        }
    } 
}

module.exports = greet;