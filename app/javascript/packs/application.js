// SCSS/CSS import
import "assets/css/vendor/jquery-jvectormap-1.2.2.css"
import "assets/css/icons.css"
import "assets/css/app.css"

// JS import
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("./theme")

const images = require.context('../images', true)
