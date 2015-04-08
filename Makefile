sunshine.js: $(shell node_modules/.bin/smash --ignore-missing --list src/sunshine.js) package.json
	@rm -f $@
	node_modules/.bin/smash src/sunshine.js | node_modules/.bin/uglifyjs - -b indent-level=2 -o $@
	@chmod a-w $@
    