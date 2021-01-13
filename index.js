const css = hexo.extend.helper.get('css').bind(hexo);

hexo.extend.injector.register('head_end', () => {
    return css('ikmask.css');
});
hexo.extend.tag.register('mask',
    /**
     * @param {Array} args 
     */
    function (args) {
        var text = args.join(' ');
        var result = "<span style=\"background-color:#555;color:#555;border:1px solid #555;\">" + text + "</span>";
        return result;
    }
);
