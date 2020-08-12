var express = require('express')
var app = express()

app.use(express.static('./dist/ngxAdminBundle'));
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/ngxAdminBundle/' }
    );
});
app.listen(process.env.PORT || 8080);
