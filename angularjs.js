module.exports = {
    'extends': './vanillajs',
    'plugins': [
        'angular'
    ],
    'rules': {
        'angular/avoid-scope-typos': ['error'],
        'angular/module-getter': ['error'],
        'angular/module-setter': ['error'],
        'angular/no-private-call': ['error'],
        'angular/component-limit': ['off'],
        'angular/controller-as-route': ['error'],
        'angular/controller-as-vm': ['error', 'vm'],
        'angular/controller-as': ['error'],
        'angular/deferred': ['error'],
        'angular/di-unused': ['error'],
        'angular/directive-restrict': ['error', {
            'explicit': 'always'
        }],
        'angular/empty-controller': ['error'],
        'angular/no-controller': ['error'],
        'angular/no-inline-template': ['error'],
        'angular/no-run-logic': ['error'],
        'angular/no-services': ['off'],
        'angular/on-watch': ['error'],
        'angular/prefer-component': ['error'],
        'angular/no-cookiestore': ['error'],
        'angular/no-directive-replace': ['error'],
        'angular/no-http-callback': ['error'],
        'angular/component-name': ['off'],
        'angular/constant-name': ['off'],
        'angular/controller-name': ['off'],
        'angular/directive-name': ['off'],
        'angular/factory-name': ['off'],
        'angular/file-name': ['off'],
        'angular/filter-name': ['off'],
        'angular/module-name': ['off'],
        'angular/provider-name': ['off'],
        'angular/service-name': ['off'],
        'angular/value-name': ['off'],
        'angular/di-order': ['off'],
        'angular/di': ['error', 'function'],
        'angular/dumb-inject': ['off'],
        'angular/function-type': ['error', 'named'],
        'angular/module-dependency-order': ['off'],
        'angular/no-service-method': ['error'],
        'angular/one-dependency-per-line': ['off'],
        'angular/rest-service': ['error', '$http'],
        'angular/watchers-execution': ['error', '$digest'],
        'angular/angularelement': ['error'],
        'angular/definedundefined': ['error'],
        'angular/document-service': ['error'],
        'angular/foreach': ['off'],
        'angular/interval-service': ['error'],
        'angular/json-functions': ['error'],
        'angular/log': ['error'],
        'angular/no-angular-mock': ['error'],
        'angular/no-jquery-angularelement': ['error'],
        'angular/timeout-service': ['error'],
        'angular/typecheck-array': ['error'],
        'angular/typecheck-date': ['error'],
        'angular/typecheck-function': ['error'],
        'angular/typecheck-number': ['error'],
        'angular/typecheck-object': ['error'],
        'angular/typecheck-string': ['error'],
        'angular/window-service': ['error'],
        'angular/on-destroy': ['error']
    },

    'overrides': [{
        'files': [
            '*.spec.js'
        ],
        'globals': {
            'angular': 'readonly',
            'inject': 'readonly'
        },
        'rules': {
            'angular/no-angular-mock': ['off']
        }
    }]
}
