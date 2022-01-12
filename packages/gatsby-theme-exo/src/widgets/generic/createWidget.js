const fs = require('fs');
const colors = require('colorette');
const inquirer = require('inquirer');

function run() {
    console.log(colors.magenta('Let\'s create a new widget!'));
    
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'Name of the widget?',
            validate: function(input) {
                const pattern = /^[^*|\":<>[\]{}`\\()';@&$ ]+$/g;
                const isValid = pattern.test(input);

                if (isValid) {
                    const filenames = fs.readdirSync('src/pages');
                    let invalid = false;

                    filenames.forEach(name => {
                        if (name.toLocaleLowerCase() === input.toLocaleLowerCase() || name.toLocaleLowerCase().indexOf(input.toLocaleLowerCase()) > -1) {
                            invalid = true;
                        }
                    });

                    return (invalid) ? `A widget with a similar name ${colors.red(input)} already exists` : true;
                } else {
                    return 'Enter a valid name no special characters or spaces allowed.';
                }
            }
        },
        {
            type: 'list',
            name: 'type',
            message: 'What kind of widget is this?',
            choices: ['Default', 'Action', 'Timeline'],
            default: 'Default'
        },
        {
            type: 'input',
            name: 'label',
            message: 'Label to display in action menu?',
            when: function(answers) {
                return answers.type === 'Action';
            }
        },
        {
            type: 'confirm',
            name: 'scroll',
            message: 'Use the default scrolling behaviour?',
            deafult: true,
        },
        {
            type: 'confirm',
            name: 'useheader', 
            message: 'Do you need a default header value?',
            default: true,
        },
        {
            type: 'input',
            name: 'header',
            message: 'Value to display in the header?',
            when: function(answers) {
                return answers.useheader;
            }
        },
        {
            type: 'confirm',
            name: 'usefooter', 
            message: 'Do you need a default footer value?',
            default: false,
        },
        {
            type: 'input',
            name: 'footer',
            message: 'Value to display in the footer?',
            when: function(answers) {
                return answers.usefooter;
            }
        }
    ];

    inquirer.prompt(questions).then(function(answers) {
        const name = capitalizeFirstLetter(answers.name);
        const type = answers.type;
        const label = (answers.type === 'Action') ? answers.label : '';
        const header = (answers.useheader) ? answers.header : '';
        const footer = (answers.usefooter) ? answers.footer : '';

        console.log(colors.cyan('Creating new widget'));

        fs.mkdir(`src/pages/${name}`, { recursive: true }, (err) => {
            if (err) throw err;
            fs.writeFile(`src/pages/${name}/index.tsx`, formatTemplate(answers.scroll ? templateBasic : templateScroll, [name, type, label, header, footer]), function(err) {            
                if (err) {
                    console.log(colors.red(err));
                } else {
                    fs.writeFile(`src/pages/${name}/Skeleton.tsx`, skeleton, function(err) {
                        if (err) {
                            console.log(colors.red(err));
                        } else {
                            console.log(colors.green('Done'));
                        }
                    });
                }
            });
        });
    }).catch(function(error) {
        console.log('error', error);
    });

}

function formatTemplate(template, args = []) {
    return template.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
        ? args[number]
        : match
        ;
    });
}

const skeleton = `
import React from 'react';
import { MainWrapper } from '../../components/Wrappers';

const Skeleton = () => {
    return (
        <MainWrapper>
            // Display something here
        </MainWrapper>
    )
}

export default Skeleton;
`

const templateBasic = `
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Skeleton from './Skeleton';
import Loading from '../../components/Loading';
import { MainWrapper } from '../../components/Wrappers';
import { UserContext } from '../../context/UserContext';
import { WidgetEvents, WidgetType } from '../../hooks/widgetApi';
import useWidgetReady from '../../hooks/useWidgetReady';

const {0} = () => {
    const ready = useWidgetReady({
        type: WidgetType.{1},
        label: "{2}",
        header: "{3}",
        footer: "{4}"
    });
    const { expanded, event, token, dealerId } = useContext(UserContext);
    const [init, setInit] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!init && ready) {
            setInit(true);
        }
    }, [init, ready]);

    // Api call to use to load widget data based on external ID
    const makeApiCall = useCallback(async (id: string) => {
        setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    // Effect to make api call when external id is changed
    useEffect(() => {
        if (event) {
            switch (event.type) {
                case WidgetEvents.WidgetPullEvents.updateContext:
                    if (event.value.external) {
                        makeApiCall(event.value.external.externalId);
                    }
                    break;
            }
        }
    }, [event, makeApiCall]);

    return (
        <Loading loading={loading} skeleton={<Skeleton />}>
            <MainWrapper>
                <div>Add UI here</div>
            </MainWrapper>
        </Loading>
    );
}

export default {0};
`

const templateScroll = `
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Skeleton from './Skeleton';
import Loading from '../../components/Loading';
import { Scroller, ScrollWrapper } from '../../components/Wrappers';
import { UserContext } from '../../context/UserContext';
import { WidgetEvents, WidgetType } from '../../hooks/widgetApi';
import useWidgetReady from '../../hooks/useWidgetReady';

const {0} = () => {
    const ready = useWidgetReady({
        type: WidgetType.{1},
        label: "{2}",
        header: "{3}",
        footer: "{4}"
    });
    const { expanded, event, token, dealerId, maxHeight, setDefaultScroll } = useContext(UserContext);
    const [init, setInit] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => { 
        setDefaultScroll(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!init && ready) {
            setInit(true);
        }
    }, [init, ready]);

    // Api call to use to load widget data based on external ID
    const makeApiCall = useCallback(async (id: string) => {
        setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    // Effect to make api call when external id is changed
    useEffect(() => {
        if (event) {
            switch (event.type) {
                case WidgetEvents.WidgetPullEvents.updateContext:
                    if (event.value.external) {
                        makeApiCall(event.value.external.externalId);
                    }
                    break;
            }
        }
    }, [event, makeApiCall]);

    return (
        <Loading loading={loading} skeleton={<Skeleton />}>
            <ScrollWrapper height={maxHeight} backgroundColor="transparent">
                <div>Add UI here</div>
                <Scroller>
                    <div>Add scrollable content here</div>
                </Scroller>
            </ScrollWrapper>
        </Loading>
    );
}

export default {0};
`

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

run();
