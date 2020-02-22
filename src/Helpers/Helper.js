export function getSearchParam(key) {
    let urlString = window.location.href;
    let url = new URL(urlString);
    return url.searchParams.get(key) ? url.searchParams.get(key) : ""; // truthy falsy
}

export function generateRegex(content){
    let regexString = content.replace(" ", ".*");
    regexString = `.*${regexString}.*`;
    return new RegExp(regexString, 'i');
}