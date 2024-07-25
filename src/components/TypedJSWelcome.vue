<template>
    <span id="typedMessage" class="typed">{{ typed }}</span>
</template>

<script>
import Typed from 'typed.js';

export default {
    // name: 'Typed',
    data() {
        return {
            typed: ''
        };
    },
    mounted() {
        this.typed = new Typed('#typedMessage', {
            strings: ['ยินดีต้อนรับ', 'ข่าวสาร', 'เทคโนโลยี'],
            typeSpeed: 130, backspeed: 100, backDelay: 900, loop: true
        });
    }
}
</script>