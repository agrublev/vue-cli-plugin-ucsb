module.exports = api => {
    api.extendPackage({
        devDependencies: {
            "@vue/eslint-config-prettier": "^4.0.1"
        }
    });

    api.render("./template");
};
