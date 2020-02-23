export const getPlan = (name) => {
    switch(name){
        case "Push":
            return PUSH;
        case "Pull":
            return PULL;
        case "Beine":
            return BEINE;
        default:

    }
}

export const PUSH = {
    Bankdruecken: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Schraegbankdruecken: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Butterfly: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Overheadpress: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Seitheben: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Stirndruecken: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Kabelzug: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
}

export const PULL = {
    Latzug: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Rudern: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Rudern_eng: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Butterfly_Reverse: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Langhantelcurls: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Hammercurls: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Kreuzheben: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
}

export const BEINE = {
    Kniebeuge: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Beinpresse: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Beinstrecker: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Beinbeuger: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Waden: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
    Bauch: [
        {reps: 0, weight: 0},
        {reps: 0, weight: 0},
        {reps: 0, weight: 0}
    ],
}