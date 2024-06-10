/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
	testEnvironment: 'node',
	preset: "ts-jest",
	testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
	transformIgnorePatterns: ['./node_modules'],
  
};

export default config;
