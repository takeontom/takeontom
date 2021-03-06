Take on Tom
===========

My portfolio website, https://takeontom.com.


Quick start
-----------

.. code:: bash

    $ git clone git@github.com:takeontom/takeontom.git
    $ cd takeontom
    $ ./bin/provision
    $ npm install
    $ npx nodemon

The site should now be up and running on http://localhost:3000.


Build steps
-----------

Uses `Gulp <https://gulpjs.com/>`_ for build tasks.

To perform a build:

.. code:: bash

    $ npm run build


To clean out the `dist` directory and then build:

.. code:: bash

    $ npm run build:full


To watch file changes and build SCSS, Javascript, optimise images and lint
automatically:

.. code:: bash

    $ npm run watch


To create a PDF of the resume in the `public_dist/resume/` directory:

.. code:: bash

    $ npm run resume_pdf


License
-------

Sorry, for obvious reasons there is no license offered for this project. This
means I *do not* give you permission to re-use the code in this project.

https://choosealicense.com/no-license/
