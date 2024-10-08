/**
 * Indicates the result of running a command, not indicative of it's execution result.
 */
export enum ExecutionResult {
	/** The command executor was run. */
	EXECUTED,

	/** No such command was found. */
	NOT_FOUND,
}
