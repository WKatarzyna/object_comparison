    e=12;
    f=e;
    let g = {

        ff (){



                                   return 'a'
        },
        dfg: 123,
        ggg:{aa:'ww', bb:18},
        hhh: [12],

    };

    let h = {
        ff (){
            return 'a'
        },
        dfg: 123,
        ggg:{aa:'ww', bb:18},
        hhh: [12],

    };
    function areEqual(a, b) {
        if (a === b) return true;
        if ( typeof a != 'object' || typeof b != 'object')
            return false;
        const keysA = Object.keys(a),
              keysB = Object.keys(b);

        if(keysA.length !== keysB.length) return false;
        for (let key, i = 0; i < keysA.length; i++) {
            key = keysA[i];
            if ((typeof a[key] === 'function' && typeof a[key] === 'function'))
                return a[key].toString().replace(/\s/g,'') === b[key].toString().replace(/\s/g,'');
            if(a[key] !== b[key]) return false;
            if (!a[key]|| !areEqual(a[key], b[key]))
                return false;

            return a[key] == b[key];
        }
    }
    console.log(areEqual(e, f));
    console.log(areEqual(g, h));
    
