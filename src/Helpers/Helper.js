export function GetSearchParam() {
    let urlString = window.location.href;
    let url = new URL(urlString);
    let rtnMe = url.searchParams.get('search') ? url.searchParams.get('search') : ""; // truthy falsy
    console.log(rtnMe);
    return rtnMe;
}
