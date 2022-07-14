<script>
    import courses from "$lib/courses.json";
    import CourseTile from "@components/CourseTile.svelte";
</script>

<main>
    <div class="overview">
        {#each courses as c}
            <CourseTile course={c} />
        {/each}
    </div>
</main>

<style>
    .overview {
        display: grid;
        grid-template-columns: auto auto auto auto;
        max-width: 50%;
        margin:auto
    }
</style>
