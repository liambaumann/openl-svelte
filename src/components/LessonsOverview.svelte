<script>
    export let course;
    //import got from "$lib/got/lessons.json";
    //{got[0].lessons[0].lessonTitle}
    //let path = "$lib/" + course + "/lessons.json";

    const promiseLessons = importLessons(course);
    console.log(promiseLessons);

    function importLessons(course) {
        return __variableDynamicImportRuntime__("$lib/" + course + "/lessons.json");
    }

    function __variableDynamicImportRuntime__(path) {
        /*switch (path) {
            case "$lib/got/lessons.json":
                return import("$lib/got/lessons.json");
            case "$lib/esp/lessons.json":
                return import("$lib/esp/lessons.json");
            default:
                return new Promise(function (resolve, reject) {
                    queueMicrotask(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
                });
        }*/
        //return import("$lib/got/lessons.json");
        return System.import("$lib/got/lessons.json");
    }
</script>

<main>
    <div class="overview">
        component:
        {#await promiseLessons}
            waiting
        {:then lessons}
            {JSON.stringify(lessons)}
        {/await}
        <!--{#each courses as c}
            <CourseTile course={c} />
        {/each}-->
    </div>
</main>

<style>
    .overview {
        display: grid;
        grid-template-columns: auto auto auto auto;
        max-width: 50%;
        margin: auto;
    }
</style>
