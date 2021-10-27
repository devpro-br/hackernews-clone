# Roda app + API mock na porta 5001
run_dev_mock:
	npm run start


# Roda apenas a app apontando para API Real (5000)
run_dev_real:
	VUE_APP_API_BASE_URL=http://localhost:5000 npm run serve


linter:
	npm run lint


clean:
	rm -rf dist/
