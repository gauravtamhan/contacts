export const toCapital = (s) => {
    let arr = s.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
};

export const convertNat = (s) => {
    const nationalities = {
        AU: "Australia",
        BR: "Brazil",
        CA: "Canada",
        CH: "Switzerland",
        DE: "Germany",
        DK: "Denmark",
        ES: "Spain",
        FI: "Finland",
        FR: "France",
        GB: "United Kingdom",
        IE: "Ireland",
        IR: "Iran",
        NO: "Norway",
        NL: "Netherlands",
        NZ: "New Zealand",
        TR: "Turkey",
        US: "United States",
    };
    return nationalities[s];
};
