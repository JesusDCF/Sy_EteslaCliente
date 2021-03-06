<?php $__env->startSection('content'); ?>
    <br>
    <div class="d-flex">
        <div class="ml-auto">
            <div class="form-group row">
                <div class="col-sm-12">
                    <div class="input-group">
                        <button id="inpClientSearchFast" class="btn btn-success btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,0c-47.41887,0 -86,38.58113 -86,86c0,47.41887 38.58113,86 86,86c47.41887,0 86,-38.58113 86,-86c0,-47.41887 -38.58113,-86 -86,-86zM86,13.23077c40.26082,0 72.76923,32.50842 72.76923,72.76923c0,18.91587 -7.23558,36.07452 -19.01923,48.99519c-4.96154,-9.12199 -19.5619,-16.61599 -35.14423,-19.84615c0,0 -7.44231,-2.01562 -4.13462,-9.30288c4.6256,-5.94351 7.44231,-12.48137 7.44231,-14.47115c0,0 6.56371,-5.29747 7.23558,-13.23077c0.67188,-7.28726 -1.44712,-8.0625 -1.44712,-8.0625c2.63582,-8.60517 3.35938,-40.98437 -17.15865,-37.00481c-3.30769,-6.61538 -25.01442,-11.86118 -34.9375,5.99519c-4.6256,8.60517 -6.69291,21.13822 -2.06731,30.38942c0,0.67188 -1.39543,-0.69772 -2.06731,3.92788c0,4.6256 2.14483,11.21515 4.13462,13.85096c0.67188,1.31791 1.98978,2.01563 3.30769,2.6875c0,0 1.29207,8.01082 7.23558,15.29808c1.31791,5.94351 -4.75481,9.30288 -4.75481,9.30288c-16.125,3.23017 -30.77704,10.72416 -35.76442,19.84615c-11.44772,-12.84315 -18.39904,-29.76923 -18.39904,-48.375c0,-40.26081 32.50842,-72.76923 72.76923,-72.76923z"></path></g></g></svg>
                        </button>
                        <input type="text" class="form-control" name="inpSearchClient" id="inpSearchClient" placeholder="Busca un cliente">
                    </div>
                </div>
            </div>
        </div>    
    </div>

    <?php echo $__env->yieldContent('cotizadores'); ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('roles/seller', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\EteslaPanelesSolares\resources\views/cotizador/cotizador.blade.php ENDPATH**/ ?>