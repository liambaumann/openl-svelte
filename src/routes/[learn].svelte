<script>
    import { page } from "$app/stores";
    //let pathtocourses = "$lib/"+course+"/lessons.json";
    //import lessons from "$lib/got/lessons.json";
    import { onMount } from "svelte";
    import { readFile } from "fs/promises";

    const course = $page.url.searchParams.get("course");
    const path = "src/lib/got/lessons.json"

    async function readJsonFile(path) {
        const file = await readFile(path, "utf8");
        return JSON.parse(file);
    }

    readJsonFile(path).then((data) => {
        console.log(data);
    });

    //const filePromise = import('$lib/${course}/lessons.json');
</script>

<main>
    <h1>Learn: {course}</h1>
    <!--{#each lessons[0].lessons as l}
        <p>{l.lessonTitle}</p>
    {/each}
    <p>{lessons[0].courseCode}</p>-->
</main>

<style>
    * {
        font-family: "Anek Latin", sans-serif;
    }
</style>
