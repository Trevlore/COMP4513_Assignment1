export function GetSearchParam(key) {
    let urlString = window.location.href;
    let url = new URL(urlString);
    let rtnMe = url.searchParams.get(key) ? url.searchParams.get(key) : ""; // truthy falsy
    return rtnMe;
}
