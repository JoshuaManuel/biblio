
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
        Pages: ''
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
}
