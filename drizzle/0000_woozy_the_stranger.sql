CREATE TABLE `rsvps` (
	`id` text PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`attending` integer DEFAULT true NOT NULL
);
