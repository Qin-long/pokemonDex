<template>
    <view class="container roundy-5 border-1 border-skyblue">
        <table>
            <thead>
                <tr height="50">
                    <th colspan="2">招式学习器</th>
                    <th>招式</th>
                    <th>属性</th>
                    <th>分类</th>
                    <th>威力</th>
                    <th>命中</th>
                    <th>P P</th>
                </tr>
            </thead>
            <tbody class="font-size-15"> 
                <tr height="30" v-for="(skill, index) of pokemon.learnSetByTechnicalMachine" :key="index" class="text-center bg-white">
                    <td >
                        <img :src="skill.imgUrl" :alt="skill.technicalMachine">
                    </td>
                    <td class="font-size-12">
                        {{skill.technicalMachine}}
                    </td>
                    <td :class="{'font-bold': (skill.type == pokemon.type1 || skill.type == pokemon.type2)}">
                        {{skill.move}}
                    </td>
                    <td  class="text-white">
                        {{skill.type}}
                    </td>
                    <td  class="text-white">
                        {{skill.category}}
                    </td>
                    <td>{{skill.power}}</td>
                    <td>{{skill.accuracy}}</td>
                    <td>{{skill.pp}}</td>
                </tr>
                <tr>
                    <td colspan="7" height="40" class="text-center font-size-15">
                        <span class="tips font-bold">粗体</span>的招式为本系招式享受1.5倍加成。 <br>
                    </td>
                </tr>
            </tbody>
        </table>
    </view>
</template>

<script>
export default {
    name: "Machine-skill",
    props: ["pokemon", "getColorByType", "getColorBySkillType"],
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 600px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

td {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
}

@media screen and (min-width: 601px) {
    .container {
        margin-left: auto;
        margin-right: auto;
    }
}
</style>