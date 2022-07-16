<script>
    import { page } from "$app/stores";
    import * as fs from "fs";
    import LessonsOverview from "../components/LessonsOverview.svelte";
    const course = $page.url.searchParams.get("course");
    //const path = "src/lib/got/lessons.json";
</script>

<main>
    <h1>Learn: {course}</h1>
    <LessonsOverview course={course}/>
</main>

<style>
    * {
        font-family: "Anek Latin", sans-serif;
    }
</style>
