import serializeMDX from '../serialize-mdx';
import fs from 'fs';

test('serializes Button to html', async () => {
  const html = await serializeMDX(`
<Button
  variant="normal"
>
  View all C SDK docs
</Button>
  `);

  expect(html).toMatchSnapshot();
});

test('serializes ButtonLink to html', async () => {
  const html = await serializeMDX(`
<ButtonLink
  to="/docs/agents/ruby-sdk"
  variant="normal"
>
  View all C SDK docs
</ButtonLink>
  `);

  expect(html).toMatchSnapshot();
});

test('serializes Callouts with title to html', async () => {
  const html = await serializeMDX(`
<Callout
  title="Life tips #1"
  variant="tip"
>
  Don't walk down that dark alleyway
</Callout>
  `);

  expect(html).toMatchSnapshot();
});

test('serializes Callouts without title to html', async () => {
  const html = await serializeMDX(`
<Callout variant="tip">
  Always tip your waiter
</Callout>
  `);

  expect(html).toMatchSnapshot();
});

test('serializes Collapser with plain text title to html', async () => {
  const html = await serializeMDX(`
<Collapser
  title="Collapse me yo"
>
  These tests are hard to write docs for
</Collapser>
  `);

  expect(html).toMatchSnapshot();
});

test('serializes Collapser with JSX title to html', async () => {
  const html = await serializeMDX(`
<Collapser
  title={<><InlineCode>agent.report_custom_attribute</InlineCode> API</>}
>
  Some API docs about \`agent.report_custom_attribute\`
</Collapser>
  `);

  expect(html).toMatchSnapshot();
});

test('serializes CollapserGroup to html', async () => {
  const html = await serializeMDX(`
<CollapserGroup>
  <Collapser
    title="Easy peasy"
  >
    Par-cheesy
  </Collapser>
</CollapserGroup>
  `);

  expect(html).toMatchSnapshot();
});

test('serializes ExternalLink to html', async () => {
  const html = await serializeMDX(`
<ExternalLink
  href="https://developer.newrelic.com"
>
  Go to developer site
</ExternalLink>
  `);

  expect(html).toMatchSnapshot();
});

test('serializes Link to html', async () => {
  const html = await serializeMDX(`
<Link
  to="/docs/agents/ruby-sdk"
>
  Check out our Ruby agent docs
</Link>
  `);

  expect(html).toMatchSnapshot();
});

test('serializes Table to html', async () => {
  const html = await serializeMDX(`
<table>
  <thead>
    <tr>
      <td>Column A</td>
      <td>Column B</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1a</td>
      <td>Data 2a</td>
    </tr>
    <tr>
      <td>Data 1b</td>
      <td>Data 2b</td>
    </tr>
  </tbody>
</table>
  `);

  expect(html).toMatchSnapshot();
});

test('serializes LandingPageTile to html', async () => {
  const html = await serializeMDX(`
<LandingPageTile
  title="Get started."
  icon="fe-check-square"
>
  * [Learn](/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm) about the wealth of APM data automatically available to you.
  * [Install your APM language agent](/docs/agents/manage-apm-agents/installation/installing-agent) from New Relic One, then start seeing actionable performance data in the [APM UI](/docs/apm/apm-ui-pages).
  * Monitor your own [business-critical key transactions](/docs/apm/transactions/key-transactions/introduction-key-transactions).
</LandingPageTile>
`);

  expect(html).toMatchSnapshot();
});

test('serializes LandingPageTileGrid to html', async () => {
  const html = await serializeMDX(`
<LandingPageTileGrid>
  <LandingPageTile
    title="Get started."
    icon="fe-check-square"
  >
    * [Learn](/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm) about the wealth of APM data automatically available to you.
    * [Install your APM language agent](/docs/agents/manage-apm-agents/installation/installing-agent) from New Relic One, then start seeing actionable performance data in the [APM UI](/docs/apm/apm-ui-pages).
    * Monitor your own [business-critical key transactions](/docs/apm/transactions/key-transactions/introduction-key-transactions).
  </LandingPageTile>
</LandingPageTileGrid>
`);

  expect(html).toMatchSnapshot();
});

test('serializes InlineCode to html', async () => {
  const html = await serializeMDX(`
<InlineCode>agent.report_custom_event()</InlineCode>
`);

  expect(html).toMatchSnapshot();
});

test('serializes Video to html', async () => {
  const html = await serializeMDX(`
<Video id="abcd" type="wistia" />
`);

  expect(html).toMatchSnapshot();
});

test('serializes Video with title to html', async () => {
  const html = await serializeMDX(`
<Video id="abcd" type="wistia" title="The video title" />
`);

  expect(html).toMatchSnapshot();
});

test('serializes Icon to html', async () => {
  const html = await serializeMDX(`
<Icon name="fe-external-link" size="1rem" />
`);

  expect(html).toMatchSnapshot();
});

test('serialize Icon inline with text to HTML', async () => {
  const html = await serializeMDX(`
This is some text with a star <Icon name="fe-star" size="1rem" /> and some more text after it
`);

  expect(html).toMatchSnapshot();
});

test('serializes Icon to html', async () => {
  const html = await serializeMDX(`
<Icon name="fe-external-link" size="1rem" />
`);

  expect(html).toMatchSnapshot();
});

test('serializes var to html', async () => {
  const html = await serializeMDX(`<var>JAVA_AGENT_VERSION</var>`);

  expect(html).toMatchSnapshot();
});

test('serializes mark to html', async () => {
  const html = await serializeMDX(`<mark>PDF</mark>`);

  expect(html).toMatchSnapshot();
});

test('serializes TechTileGrid to html', async () => {
  const html = await serializeMDX(`
<TechTileGrid>
  <TechTile
    name="iOS"
    icon="logo-apple"
    to="/agents/ios-agent"
  />
</TechTileGrid>
`);

  expect(html).toMatchSnapshot();
});

test('kitchen sink', async () => {
  const html = await serializeMDX(
    fs.readFileSync(`${__dirname}/kitchen-sink.mdx`, 'utf-8')
  );

  expect(html).toMatchSnapshot();
});
