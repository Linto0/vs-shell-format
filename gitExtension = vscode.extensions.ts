import * as vscode from 'vscode';

interface GitExtension {
    getAPI(version: number): any;
}

const gitExtension = vscode.extensions.getExtension<GitExtension>('vscode.git')?.exports;

if (gitExtension) {
    let git = gitExtension.getAPI(1);
    // Use the `git` object as needed
} else {
    console.error('Git extension not found');
}
