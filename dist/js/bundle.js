/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/***/ ((module) => {

function getDate() {
    let user;
    user = JSON.parse(localStorage.getItem('user') || "{}")
    const hello = document.querySelector('.hello')
    
    hello.innerHTML = user.name 
}


module.exports = getDate()

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((module) => {

function myModule() {
  let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    password: /^[a-z ,.'-]+$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi,
  };

  const inps = document.querySelectorAll("input");
  const btn = document.querySelector(".btn");
  const form = document.forms.login;

  let txt = "";

  for (let i = 0; i < inps.length; i++) {
    inps[i].addEventListener("keyup", (e) => {
      txt = e.target.value;
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let user = {};

    let fm = new FormData(form);

    fm.forEach((value, key) => {
      user[key] = value;
    });

    localStorage.setItem("user", JSON.stringify(user));
    location.href = "/html/login.html";
  });

  inps.forEach((inp) => {
    inp.onkeyup = () => {
      console.log(patterns[inp.name].test(inp.value));
      if (patterns[inp.name].test(inp.value)) {
        inp.parentElement.classList.remove("errorField");
      } else {
        inp.parentElement.classList.add("errorField");
      }
    };
  });
}

myModule();

module.exports = myModule()

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

function Module() {
    let patterns = {
        name: /^[a-z ,.'-]+$/i,
        surname: /^[a-z ,.'-]+$/i,
        password: /^[a-z ,.'-]+$/i,
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig
    }
    
    
    
    const btn = document.querySelector('.btn')
    const pochta = document.querySelector('.pochta')
    const parol = document.querySelector('.parol')
    const form = document.forms.login
    
    let namee = ''
    let password = ''
    
    let user;
    
    function getDate() {
        user = JSON.parse(localStorage.getItem('user') || "{}")
    }
    
    pochta.addEventListener('keyup', (e) => {
        namee = e.target.value
    })
    parol.addEventListener('keyup', (e) => {
        password = e.target.value
    })
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (user.email === namee && user.password === password) {
            location.href = '/html/about.html'
        } else {
            alert('hatto')
        }
    })
    
    const inps = document.querySelectorAll('input')
    
    inps.forEach(inp => {
        inp.onkeyup = () => {
            console.log(
                patterns[inp.name].test(inp.value)
                );
                if (patterns[inp.name].test(inp.value)) {
                    inp.parentElement.classList.remove('errorField')
                } else {
                    inp.parentElement.classList.add('errorField')
                }
            }
        })
        
        getDate()
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
const myModule = __webpack_require__(/*! ./index.js */ "./src/js/index.js")

myModule()

const getDate = __webpack_require__(/*! ./about.js */ "./src/js/about.js")

getDate()

const module = __webpack_require__(/*! ./main.js */ "./src/js/main.js")

module()
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map