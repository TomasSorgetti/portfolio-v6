<script lang="ts">
	type AccessibleSectionProps = {
		id?: string;
		label: string;
		backgroundImage?: string | null;
		children: any;
	} & Record<string, unknown>;

	const {
		id,
		label,
		backgroundImage = null,
		children,
		...attributes
	}: AccessibleSectionProps = $props();
</script>

<section
	{id}
	aria-label={label}
	class="w-full px-16 py-4 bg-cover bg-center bg-no-repeat text-center"
	style:background-image={backgroundImage ? `url('${backgroundImage}')` : undefined}
	{...attributes}
>
	{@render children?.()}
</section>
