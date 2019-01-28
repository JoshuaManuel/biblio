
export function initialState() {
    return {
        showTemplate: false,
        lName: '',
        fName:'',
        fInitial: '',
        mInitial: '',
        Year: '',
        Month:'',
        Day: '',
        Title: '',
        url: '',
        City: '',
        State: '',
        Publisher: '',
        Pages: '',
        Website: '',
    }
}
//not needed. Make sure to delete once all the pages are in!
export function resetForm() {
    this.lName = '';
    this.fName = '';
    this.fInitial = '';
    this.mInitial = '';
    this.Year = '';
    this.Month = '';
    this.Day = '';
    this.Title = '';
    this.url = '';
    this.City = '';
    this.State = '';
    this.Publisher = '';
    this.Pages = '';
    this.Website = '';
}

export function convertHtmlToRtf(html) {
    var header = "{\\rtf1\\ansi\\deff0\n"
    var footer = "}"

    html = html.replace("<i>", "{\\i ")
    html = html.replace("</i>", "}")

    console.log(header + html+ footer);
    //console.log(html)
    return header + html + footer;
}
