# EIG WP-CLI Commands

A collection of commands used on Endurance International Group hosts.

### Add New Command

1. Create new PHP file in /inc/cli.
2. Create new class extending EIG_WP_CLI_Command in the new file.
    * Register main command as public function __invoke(). All public functions are subcommands.
    * Make sure to add a docblock description to __invoke() and each public method -- WP-CLI scrapes these for documentation.
3. Register command in EIG_WP_CLI_Loader (inc/cli-init.php) in $this->cmds array. Example config array below.
```php
array(
  'cmd'      => 'string for command.',
  'class'    => 'string for classname containing functionality.'
  'supports' => 'optional string|array with supported alias(es) for command. Defaults to all.',
)
```

### Reminders

* Note formatting helpers in EIG_WP_CLI_Command.
* Root command functionality goes in `public function __invoke( $args, $assoc_args )`.
    * $args are sub-commands following the command alias. wp {alias} {cmd} {$args[0]} {$args[1]}.
    * $assoc_args are flags following command. wp {alias} {cmd} --some_flag=some_value.
* Note all public functions in a `EIG_WP_CLI_Command` extending class become sub-commands.
    * Use public functions for sub-commands. Use docblock descriptions to feed WP-CLI descriptions.
    * Use protected functions for helpers/internal methods.
    * Avoid private functions.
* Note it's often most efficient to establish all variables in the `__invoke()`, then route to sub-commands using a `switch()`.