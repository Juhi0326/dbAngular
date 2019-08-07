* Move Home component out of shared, because you not sharing multiple times the Home page. Create a pges folder or a core or someting else for it.
* Do not forget to use TSlint `ng lint` because you have some issues.
* Start to implement any of the CI what i mentioned before for the Build and unit test.
* Look up the [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) and/or [git-pre-push](https://www.npmjs.com/package/git-pre-push). This will help prevent to push any bad code up.
* In the source code try to not use short namespace like `res, m` use the full namespace like response, message etc. The build complier will uglify and compress your code in production version `ng build --prod` and you dont need to safe space in the code, just make it readable.
* Add return type always to you functions like `Void`, `Promise<MyReturnType>` etc.
* you should replace the `formControl.errors.required` to `formControl.hasError('required')` and all the similar references in your templates.
* you should separate the logged in and not users functionalities. Do not show at all the Customers and add new costumers to the public, and do not show the registrations to the logged in users.
 