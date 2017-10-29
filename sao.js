const superb = require('superb');

module.exports = {
	prompts: {
		name: {
			message: 'What is the name of the new project?',
			default: ':folderName:'
		},
		description: {
			message: 'How would you descripe the new project?',
			default: `My ${superb()} Vue project`
		},
		username: {
			message: 'What is your GitHub username?',
			default: ':gitUser:',
			store: true
		},
		email: {
			message: 'What is your GitHub email?',
			default: ':gitEmail:',
			store: true
		}
	},
	data() {
		return {
			currentYear: (new Date()).getFullYear()
		};
	},
	move: {
		gitignore: '.gitignore'
	},
	showTip: true,
	gitInit: true,
	installDependencies: true
};
