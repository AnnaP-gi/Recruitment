/* @ds-bundle: {"format":3,"namespace":"ALKDesignSystem_ae2905","components":[{"name":"Button","sourcePath":"components/button/Button.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"Input","sourcePath":"components/inputs/Input.jsx"},{"name":"InputTextArea","sourcePath":"components/inputs/InputTextArea.jsx"},{"name":"TagInputDropdown","sourcePath":"components/inputs/TagInputDropdown.jsx"},{"name":"RadioTabs","sourcePath":"components/navigation/RadioTabs.jsx"},{"name":"Checkbox","sourcePath":"components/selection/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/selection/Radio.jsx"},{"name":"Tag","sourcePath":"components/tags/Tag.jsx"},{"name":"TagInput","sourcePath":"components/tags/TagInput.jsx"}],"sourceHashes":{"components/button/Button.jsx":"54d857cc67a9","components/icon/Icon.jsx":"ea9e355bead0","components/inputs/Input.jsx":"aefb2693ebe0","components/inputs/InputTextArea.jsx":"78088ae9c764","components/inputs/TagInputDropdown.jsx":"312f37884b72","components/navigation/RadioTabs.jsx":"e2a4e710a05f","components/selection/Checkbox.jsx":"de2b84fc6e5c","components/selection/Radio.jsx":"81e6771fac7b","components/tags/Tag.jsx":"467ee48afe98","components/tags/TagInput.jsx":"fe5f3681a803","ui_kits/enrollment-form/EnrollmentForm.jsx":"014653c93ae2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ALKDesignSystem_ae2905 = window.ALKDesignSystem_ae2905 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ALK iconography = Heroicons v2 (outline), MIT-licensed.
   Only the glyphs actually referenced by the ALK form kit are included:
   chevron-down/up/right, x-mark, user, eye, clock, check-circle,
   exclamation-circle, information-circle, copy, check.
   Single-color: paints with currentColor. Recolor via CSS `color`. */

const PATHS = {
  "chevron-down": "M19.5 8.25l-7.5 7.5-7.5-7.5",
  "chevron-up": "m4.5 15.75 7.5-7.5 7.5 7.5",
  "chevron-right": "m8.25 4.5 7.5 7.5-7.5 7.5",
  "x-mark": "M6 18 18 6M6 6l12 12",
  "user": "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
  "eye": "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  "clock": "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  "check-circle": "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  "exclamation-circle": "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z",
  "information-circle": "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
  "check": "m4.5 12.75 6 6 9-13.5",
  "copy": "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m11.25 6.75h1.5"
};
function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  style,
  ...rest
}) {
  const d = PATHS[name];
  if (!d) return null;
  const commands = d.split(" M").map((seg, i) => i === 0 ? seg : "M" + seg);
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: "block",
      flexShrink: 0,
      ...style
    }
  }, rest), commands.map((c, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: c
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ALK primary button ("Button_New_right-icon").
   Crimson fill, sharp 2px corners, uppercase Open Sans Bold label,
   trailing rubber chevron that nudges right on hover (micro-interaction). */

const SIZES = {
  small: {
    height: 48,
    padding: "16px 16px",
    fontSize: 16,
    gap: 16
  },
  medium: {
    height: 52,
    padding: "18px 24px",
    fontSize: 18,
    gap: 16
  },
  large: {
    height: 54,
    padding: "18px 24px",
    fontSize: 18,
    gap: 24
  },
  huge: {
    height: 64,
    padding: "20px 48px",
    fontSize: 24,
    gap: 16
  }
};
function Button({
  children = "Rozpocznij rekrutację",
  variant = "primary",
  size = "medium",
  disabled = false,
  showIcon = true,
  icon = "chevron-right",
  fullWidth = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.medium;
  const secondary = variant === "secondary";

  // Primary = crimson fill; Secondary = bordered, no fill, blue (#3252B5).
  const bg = secondary ? hover && !disabled ? "rgba(50,82,181,0.06)" : "transparent" : disabled ? "var(--alk-gray-75)" : hover ? "var(--action-primary-hover)" : "var(--action-primary)";
  const border = secondary ? "1px solid var(--alk-blue-label)" : "none";
  const labelColor = secondary ? "var(--alk-blue-label)" : "var(--action-on-primary)";
  const iconColor = secondary ? "var(--alk-blue-label)" : "var(--accent-warm)";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      border: border,
      borderRadius: "var(--radius-button)",
      backgroundColor: bg,
      color: labelColor,
      fontFamily: "var(--font-ui)",
      fontWeight: "var(--fw-bold)",
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: "var(--type-cta-spacing)",
      textTransform: "uppercase",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.7 : 1,
      transform: active && !disabled ? "translateY(0.5px)" : "none",
      transition: "background-color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), showIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.fontSize >= 24 ? 18 : 16,
    strokeWidth: 2.25,
    style: {
      color: iconColor,
      opacity: secondary ? 1 : 0.85,
      transform: hover && !disabled ? "translateX(3px)" : "translateX(0)",
      transition: "transform var(--dur-base) var(--ease-standard)"
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/button/Button.jsx", error: String((e && e.message) || e) }); }

// components/inputs/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ALK Basic Input — labelled text field.
   States: default · active (blue inset ring) · error (red ring + message)
   · success (green ring) · disabled. Optional trailing icon.
   Border is an inset box-shadow ring, not a border (matches source). */

const RINGS = {
  default: "var(--ring-input)",
  active: "var(--ring-input-active)",
  error: "var(--ring-input-error)",
  success: "inset 0 0 0 1px var(--alk-success)"
};
function Input({
  label,
  required = false,
  placeholder = "Value",
  value,
  defaultValue,
  onChange,
  state = "default",
  disabled = false,
  message,
  trailingIcon,
  type = "text",
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = React.useId();
  const effState = disabled ? "default" : focused ? "active" : state;
  const ring = disabled ? "var(--ring-input)" : RINGS[effState] || RINGS.default;
  const msgColor = state === "error" ? "var(--text-error)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      fontFamily: "var(--font-form)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: 2,
      fontSize: 14,
      fontWeight: "var(--fw-medium)",
      lineHeight: 1.4,
      color: "var(--text-primary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--alk-error)",
      fontWeight: "var(--fw-regular)",
      fontSize: 12
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      minHeight: 38,
      padding: "0 12px",
      borderRadius: "var(--radius-input)",
      backgroundColor: disabled ? "var(--alk-surface-subtle)" : "var(--alk-white)",
      boxShadow: ring,
      transition: "box-shadow var(--dur-base) var(--ease-standard)",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    "aria-required": required || undefined,
    "aria-invalid": state === "error" || undefined,
    "aria-describedby": message ? fieldId + "-msg" : undefined,
    type: type,
    disabled: disabled,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      padding: "10px 0",
      fontFamily: "var(--font-form)",
      fontSize: 14,
      fontWeight: "var(--fw-regular)",
      lineHeight: 1.4,
      color: disabled ? "var(--text-muted)" : "var(--text-primary)"
    }
  }, rest)), trailingIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: trailingIcon,
    size: 20,
    strokeWidth: 1.75,
    style: {
      color: "var(--text-muted)"
    }
  })), message && /*#__PURE__*/React.createElement("span", {
    id: fieldId + "-msg",
    style: {
      fontSize: 14,
      lineHeight: 1.4,
      color: msgColor
    }
  }, message));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inputs/Input.jsx", error: String((e && e.message) || e) }); }

// components/inputs/InputTextArea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ALK Text Area Input.
   4px radius, inset-ring border, resize handle bottom-right.
   Statuses: default · active (blue ring) · completed (filled) · inactive (disabled). */

const RINGS = {
  default: "var(--ring-input)",
  active: "var(--ring-input-active)",
  completed: "var(--ring-input)",
  inactive: "var(--ring-input)"
};
function InputTextArea({
  label,
  required = false,
  placeholder = "Value",
  value,
  defaultValue,
  onChange,
  status = "default",
  rows = 3,
  message,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = React.useId();
  const disabled = status === "inactive";
  const effStatus = disabled ? "inactive" : focused ? "active" : status;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontFamily: "var(--font-form)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      fontSize: 14,
      fontWeight: "var(--fw-medium)",
      lineHeight: 1.4,
      color: "var(--text-primary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--alk-error)",
      fontWeight: "var(--fw-regular)",
      fontSize: 12
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    "aria-required": required || undefined,
    "aria-invalid": status === "error" || undefined,
    "aria-describedby": message ? fieldId + "-msg" : undefined,
    rows: rows,
    disabled: disabled,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      display: "block",
      width: "100%",
      resize: "vertical",
      padding: "10px 12px",
      borderRadius: "var(--radius-textarea)",
      border: "none",
      outline: "none",
      boxShadow: RINGS[effStatus] || RINGS.default,
      backgroundColor: disabled ? "var(--alk-surface-subtle)" : "var(--alk-white)",
      fontFamily: "var(--font-form)",
      fontSize: 14,
      fontWeight: "var(--fw-regular)",
      lineHeight: 1.4,
      color: disabled ? "var(--text-muted)" : "var(--text-primary)",
      transition: "box-shadow var(--dur-base) var(--ease-standard)",
      boxSizing: "border-box"
    }
  }, rest))), message && /*#__PURE__*/React.createElement("span", {
    id: fieldId + "-msg",
    style: {
      fontSize: 14,
      lineHeight: 1.4,
      color: "var(--text-muted)"
    }
  }, message));
}
Object.assign(__ds_scope, { InputTextArea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inputs/InputTextArea.jsx", error: String((e && e.message) || e) }); }

// components/inputs/TagInputDropdown.jsx
try { (() => {
/* ALK Input with trailing dropdown (Select / combobox).
   Left value + trailing group (optional unit/suffix value + chevron).
   `side` places the trailing group left or right. Opens a simple menu. */

function TagInputDropdown({
  label,
  required = false,
  placeholder = "Wybierz",
  options = [],
  value,
  defaultValue,
  onChange,
  suffix,
  side = "right",
  state = "default",
  disabled = false,
  message,
  style,
  ...rest // __restfwd_tid
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? "");
  const selected = isControlled ? value : internal;
  const [open, setOpen] = React.useState(false);
  const listId = React.useId();
  const labelId = React.useId();
  const [active, setActive] = React.useState(-1);
  const optValues = options.map(o => typeof o === "string" ? o : o.value);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const pick = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
    setOpen(false);
  };
  const openMenu = () => { const i = optValues.indexOf(selected); setActive(i < 0 ? 0 : i); setOpen(true); };
  const onKey = e => {
    if (disabled) return;
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") { e.preventDefault(); openMenu(); }
      return;
    }
    if (e.key === "ArrowDown") { e.preventDefault(); setActive(a => Math.min((a < 0 ? -1 : a) + 1, options.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive(a => Math.max((a < 0 ? options.length : a) - 1, 0)); }
    else if (e.key === "Home") { e.preventDefault(); setActive(0); }
    else if (e.key === "End") { e.preventDefault(); setActive(options.length - 1); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (active >= 0) pick(optValues[active]); }
    else if (e.key === "Escape") { e.preventDefault(); setOpen(false); }
  };
  const effState = disabled ? "default" : open ? "active" : state;
  const ring = {
    default: "var(--ring-input)",
    active: "var(--ring-input-active)",
    error: "var(--ring-input-error)"
  }[effState];
  const trailing = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexShrink: 0
    }
  }, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, suffix), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? "chevron-up" : "chevron-down",
    size: 20,
    strokeWidth: 1.75,
    style: {
      color: "var(--text-muted)",
      transition: "transform var(--dur-base) var(--ease-standard)"
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      fontFamily: "var(--font-form)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    id: labelId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      fontSize: 14,
      fontWeight: "var(--fw-medium)",
      lineHeight: 1.4,
      color: "var(--text-primary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--alk-error)",
      fontWeight: "var(--fw-regular)",
      fontSize: 12
    }
  }, "*")), /*#__PURE__*/React.createElement("button", Object.assign({
    type: "button",
    role: "combobox",
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    "aria-controls": listId,
    "aria-labelledby": label ? labelId : undefined,
    "aria-required": required || undefined,
    "aria-invalid": state === "error" || undefined,
    "aria-activedescendant": open && active >= 0 ? listId + "-opt-" + active : undefined,
    disabled: disabled,
    onClick: () => { if (open) setOpen(false); else openMenu(); },
    onKeyDown: onKey,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: side === "left" ? "row-reverse" : "row",
      gap: 12,
      minHeight: 38,
      padding: "0 12px",
      borderRadius: "var(--radius-input)",
      backgroundColor: disabled ? "var(--alk-surface-subtle)" : "var(--alk-white)",
      boxShadow: ring,
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      textAlign: side === "left" ? "right" : "left",
      transition: "box-shadow var(--dur-base) var(--ease-standard)",
      boxSizing: "border-box"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      color: selected ? "var(--text-primary)" : "var(--text-muted)"
    }
  }, selected || placeholder), trailing), open && options.length > 0 && /*#__PURE__*/React.createElement("ul", {
    role: "listbox",
    id: listId,
    "aria-label": label || placeholder,
    style: {
      position: "absolute",
      top: "calc(100% + 4px)",
      left: 0,
      right: 0,
      zIndex: 20,
      margin: 0,
      padding: 4,
      listStyle: "none",
      backgroundColor: "var(--alk-white)",
      borderRadius: "var(--radius-input)",
      boxShadow: "var(--ring-input), 0 8px 24px rgba(3,9,40,0.12)",
      maxHeight: 240,
      overflowY: "auto"
    }
  }, options.map((opt, __i) => {
    const val = typeof opt === "string" ? opt : opt.value;
    const lbl = typeof opt === "string" ? opt : opt.label;
    const sel = val === selected;
    return /*#__PURE__*/React.createElement("li", {
      key: val,
      id: listId + "-opt-" + __i,
      role: "option",
      "aria-selected": sel,
      onClick: () => pick(val),
      onMouseEnter: () => setActive(__i),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 10px",
        borderRadius: 4,
        fontSize: 14,
        color: "var(--text-primary)",
        backgroundColor: sel || __i === active ? "var(--alk-surface-subtle)" : "transparent",
        cursor: "pointer"
      }
    }, lbl, sel && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 16,
      strokeWidth: 2,
      style: {
        color: "var(--alk-blue-label)"
      }
    }));
  })), message && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: 1.4,
      color: state === "error" ? "var(--text-error)" : "var(--text-muted)"
    }
  }, message));
}
Object.assign(__ds_scope, { TagInputDropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inputs/TagInputDropdown.jsx", error: String((e && e.message) || e) }); }

// components/navigation/RadioTabs.jsx
try { (() => {
/* ALK Radio Tabs — a segmented radio group where each option is a full
   tab row with a leading radio indicator. Selected tab fills navy (Alumni)
   with white label; unselected shows a hairline border and turns its label
   blue on hover. Sizes: desktop (18px) / mobile (14px). */

function RadioDot({
  checked,
  onDark
}) {
  const ring = onDark ? "var(--alk-white)" : checked ? "var(--alk-blue-label)" : "var(--alk-gray-75)";
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      display: "inline-flex",
      width: 20,
      height: 20,
      borderRadius: "50%",
      border: `2px solid ${ring}`,
      flexShrink: 0,
      boxSizing: "border-box",
      transition: "border-color var(--dur-base) var(--ease-standard)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 3,
      borderRadius: "50%",
      backgroundColor: onDark ? "var(--alk-white)" : "var(--alk-blue-label)"
    }
  }));
}
function RadioTabs({
  options = [],
  value,
  defaultValue,
  onChange,
  size = "desktop",
  name,
  style
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (typeof options[0] === "string" ? options[0] : options[0]?.value));
  const selected = isControlled ? value : internal;
  const [hover, setHover] = React.useState(null);
  const fontSize = size === "mobile" ? 14 : 18;
  const pad = size === "mobile" ? "16px 24px 16px 12px" : "12px 24px 12px 16px";
  const pick = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-ui)",
      ...style
    }
  }, options.map((opt, i) => {
    const val = typeof opt === "string" ? opt : opt.value;
    const lbl = typeof opt === "string" ? opt : opt.label;
    const sel = val === selected;
    const hov = hover === val;
    const labelColor = sel ? "var(--alk-white)" : hov ? "var(--alk-blue-label)" : "var(--text-primary)";
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      type: "button",
      role: "radio",
      "aria-checked": sel,
      name: name,
      onClick: () => pick(val),
      onMouseEnter: () => setHover(val),
      onMouseLeave: () => setHover(null),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: pad,
        marginTop: i === 0 ? 0 : "-1.057px",
        border: `1.057px solid ${sel ? "var(--alk-deep-waters)" : "var(--alk-border-subtle)"}`,
        backgroundColor: sel ? "var(--alk-alumni)" : "var(--alk-white)",
        cursor: "pointer",
        textAlign: "left",
        position: "relative",
        zIndex: sel ? 1 : 0,
        transition: "background-color var(--dur-base) var(--ease-standard)",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement(RadioDot, {
      checked: sel,
      onDark: sel
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize,
        fontWeight: "var(--fw-semibold)",
        lineHeight: 1.3,
        color: labelColor
      }
    }, lbl));
  }));
}
Object.assign(__ds_scope, { RadioTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/RadioTabs.jsx", error: String((e && e.message) || e) }); }

// components/selection/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ALK Checkbox (checkbox_field).
   16px SHARP square (no radius) — checked fills Alumni navy with a white
   check; unchecked shows a hairline border. Optional label + description. */

function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  label,
  description,
  disabled = false,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": on,
    disabled: disabled,
    onClick: toggle,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: 0,
      border: "none",
      background: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      textAlign: "left"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 16,
      height: 16,
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: on ? "var(--alk-alumni)" : "var(--alk-white)",
      boxShadow: on ? "none" : "inset 0 0 0 1px var(--alk-border)",
      transition: "background-color var(--dur-base) var(--ease-standard)"
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 11,
    strokeWidth: 2.75,
    style: {
      color: "var(--alk-space)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      lineHeight: 1.5,
      letterSpacing: "0.02em",
      color: "var(--alk-deep-waters)"
    }
  }, label)), description && /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: 24,
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: "0.02em",
      color: "#989aa7"
    }
  }, description));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/selection/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ALK Radio button + group ("Radio buttons").
   20px circular indicator: outer ring, filled navy dot when selected.
   States: default · selected · disabled. Use <RadioGroup> for a set. */

function Radio({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled = false,
  name,
  value,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const select = () => {
    if (disabled) return;
    if (!isControlled) setInternal(true);
    onChange && onChange(value ?? true);
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "radio",
    "aria-checked": on,
    disabled: disabled,
    name: name,
    onClick: select,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: 0,
      border: "none",
      background: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      textAlign: "left",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: "50%",
      boxSizing: "border-box",
      border: `2px solid ${on ? "var(--alk-alumni)" : "var(--alk-gray-75)"}`,
      transition: "border-color var(--dur-base) var(--ease-standard)"
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 3,
      borderRadius: "50%",
      backgroundColor: "var(--alk-alumni)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      lineHeight: 1.5,
      letterSpacing: "0.02em",
      color: "var(--alk-deep-waters)"
    }
  }, label));
}
function RadioGroup({
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  disabled = false,
  gap = 12,
  style
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (typeof options[0] === "string" ? options[0] : options[0]?.value));
  const selected = isControlled ? value : internal;
  const pick = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: "column",
      gap,
      ...style
    }
  }, options.map(opt => {
    const val = typeof opt === "string" ? opt : opt.value;
    const lbl = typeof opt === "string" ? opt : opt.label;
    return /*#__PURE__*/React.createElement(Radio, {
      key: val,
      name: name,
      value: val,
      label: lbl,
      checked: val === selected,
      disabled: disabled || typeof opt === "object" && opt.disabled,
      onChange: () => pick(val)
    });
  }));
}

/* Companion set helper — used as <Radio.Group options={…} />. */
Radio.Group = RadioGroup;
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Radio.jsx", error: String((e && e.message) || e) }); }

// components/tags/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ALK Tag / chip. 6px radius, subtle fill, hairline ring, optional close.
   Colors: grey (default) · brand (navy) · warm (rubber). */

const COLORS = {
  grey: {
    bg: "var(--alk-surface-subtle)",
    ring: "var(--alk-border-tag)",
    fg: "var(--text-primary)"
  },
  brand: {
    bg: "var(--alk-space)",
    ring: "var(--alk-blue-75)",
    fg: "var(--alk-alumni)"
  },
  warm: {
    bg: "#f5efe8",
    ring: "#e3d3c1",
    fg: "var(--alk-rubber)"
  }
};
function Tag({
  children = "Value",
  color = "grey",
  onClose,
  disabled = false,
  style,
  ...rest
}) {
  const c = COLORS[color] || COLORS.grey;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      padding: "4px 8px",
      borderRadius: "var(--radius-tag)",
      backgroundColor: c.bg,
      boxShadow: `inset 0 0 0 1px ${c.ring}`,
      fontFamily: "var(--font-form)",
      fontSize: 14,
      fontWeight: "var(--fw-regular)",
      lineHeight: 1.4,
      color: c.fg,
      opacity: disabled ? 0.5 : 1,
      boxSizing: "border-box",
      ...style
    }
  }, rest), children, onClose && !disabled && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Remove",
    style: {
      display: "inline-flex",
      padding: 0,
      margin: 0,
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x-mark",
    size: 12,
    strokeWidth: 2
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tags/Tag.jsx", error: String((e && e.message) || e) }); }

// components/tags/TagInput.jsx
try { (() => {
/* ALK Tag Input — a field that holds multiple chips.
   Type + Enter to add, × to remove. Collapses overflow to "+N".
   States: default · active (blue ring on focus) · error. */

function TagInput({
  label,
  required = false,
  value,
  defaultValue = [],
  onChange,
  placeholder = "Dodaj i naciśnij Enter",
  maxVisible = 3,
  state = "default",
  disabled = false,
  message,
  style,
  ...rest // __restfwd_tid
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const tags = isControlled ? value : internal;
  const [draft, setDraft] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const setTags = next => {
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  };
  const add = t => {
    const v = t.trim();
    if (v && !tags.includes(v)) setTags([...tags, v]);
    setDraft("");
  };
  const remove = t => setTags(tags.filter(x => x !== t));
  const effState = disabled ? "default" : focused ? "active" : state;
  const ring = {
    default: "var(--ring-input)",
    active: "var(--ring-input-active)",
    error: "var(--ring-input-error)"
  }[effState];
  const visible = tags.slice(0, maxVisible);
  const overflow = tags.length - visible.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      fontFamily: "var(--font-form)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      fontSize: 14,
      fontWeight: "var(--fw-medium)",
      lineHeight: 1.4,
      color: "var(--text-primary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--alk-error)",
      fontWeight: "var(--fw-regular)",
      fontSize: 12
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      const inp = e.currentTarget.querySelector("input");
      inp && inp.focus();
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      minHeight: 38,
      padding: "6px 12px",
      borderRadius: "var(--radius-input)",
      backgroundColor: disabled ? "var(--alk-surface-subtle)" : "var(--alk-white)",
      boxShadow: ring,
      transition: "box-shadow var(--dur-base) var(--ease-standard)",
      cursor: "text",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 8,
      flex: 1,
      minWidth: 0
    }
  }, visible.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    onClose: disabled ? undefined : () => remove(t)
  }, t)), overflow > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, "+", overflow), /*#__PURE__*/React.createElement("input", {
    value: draft,
    disabled: disabled,
    placeholder: tags.length === 0 ? placeholder : "",
    onChange: e => setDraft(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onKeyDown: e => {
      if (e.key === "Enter") {
        e.preventDefault();
        add(draft);
      } else if (e.key === "Backspace" && !draft && tags.length) remove(tags[tags.length - 1]);
    },
    style: {
      flex: 1,
      minWidth: 60,
      border: "none",
      outline: "none",
      background: "transparent",
      padding: "4px 0",
      fontFamily: "var(--font-form)",
      fontSize: 14,
      color: "var(--text-primary)"
    }
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 20,
    strokeWidth: 1.75,
    style: {
      color: "var(--text-muted)"
    }
  })), message && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: 1.4,
      color: state === "error" ? "var(--text-error)" : "var(--text-muted)"
    }
  }, message));
}
Object.assign(__ds_scope, { TagInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tags/TagInput.jsx", error: String((e && e.message) || e) }); }

// ui_kits/enrollment-form/EnrollmentForm.jsx
try { (() => {
/* ALK enrollment form — a landing-page recruitment form (LP TDJ-form).
   Composes ALK primitives from the bundle. Cosmetic recreation. */
const {
  Button,
  Input,
  TagInputDropdown,
  InputTextArea,
  TagInput,
  RadioTabs,
  Checkbox,
  Icon
} = window.ALKDesignSystem_ae2905;
function EnrollmentForm() {
  const [level, setLevel] = React.useState("Studia podyplomowe");
  const [consent, setConsent] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--surface-page)",
      fontFamily: "var(--font-form)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 40px",
      background: "var(--alk-deep-waters)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 800,
      fontSize: 26,
      letterSpacing: ".06em",
      color: "var(--alk-space)"
    }
  }, "ALK"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--alk-rubber-dark)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16,
    style: {
      color: "var(--alk-rubber-dark)"
    }
  }), /*#__PURE__*/React.createElement("span", null, "Rekrutacja trwa do 30 wrze\u015Bnia"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--alk-alumni)",
      padding: "40px 40px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontWeight: 600,
      fontSize: 20,
      color: "var(--alk-rubber-dark)"
    }
  }, "Ucz si\u0119 od najlepszych"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-form)",
      fontWeight: 500,
      fontSize: 32,
      lineHeight: 1.3,
      color: "var(--alk-space)"
    }
  }, "Formularz zg\u0142oszeniowy"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      maxWidth: 560,
      fontFamily: "var(--font-ui)",
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--alk-blue-75)"
    }
  }, "Wype\u0142nij poni\u017Csze pola, aby rozpocz\u0105\u0107 rekrutacj\u0119. Zajmie to oko\u0142o pi\u0119ciu minut \u2014 wszystkie dane mo\u017Cesz p\xF3\u017Aniej uzupe\u0142ni\u0107."))), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 760,
      margin: "-24px auto 56px",
      padding: "0 40px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--alk-white)",
      boxShadow: "0 1px 0 var(--alk-border-subtle), 0 12px 40px rgba(3,9,40,0.06)",
      padding: 40
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16,
      padding: "40px 0"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 56,
    strokeWidth: 1.25,
    style: {
      color: "var(--alk-success)"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-form)",
      fontWeight: 500,
      fontSize: 24,
      color: "var(--alk-deep-waters)"
    }
  }, "Zg\u0142oszenie wys\u0142ane"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)",
      fontSize: 15,
      textAlign: "center",
      maxWidth: 400,
      lineHeight: 1.5
    }
  }, "Dzi\u0119kujemy. Skontaktujemy si\u0119 z Tob\u0105 w ci\u0105gu dw\xF3ch dni roboczych na podany adres e-mail."), /*#__PURE__*/React.createElement(Button, {
    size: "medium",
    showIcon: false,
    onClick: () => setSent(false)
  }, "Wr\xF3\u0107 do formularza")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h3", {
    style: sectionTitle
  }, "Poziom studi\xF3w"), /*#__PURE__*/React.createElement(RadioTabs, {
    options: ["Studia I stopnia", "Studia II stopnia", "Studia podyplomowe", "MBA"],
    value: level,
    onChange: setLevel
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Imi\u0119",
    required: true,
    placeholder: "Wpisz imi\u0119"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Nazwisko",
    required: true,
    placeholder: "Wpisz nazwisko"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Adres e-mail",
    required: true,
    placeholder: "jan.kowalski@example.com",
    trailingIcon: "user"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefon",
    placeholder: "+48"
  }), /*#__PURE__*/React.createElement(TagInputDropdown, {
    label: "Program",
    required: true,
    placeholder: "Wybierz program",
    options: ["Executive MBA", "MBA IT", "Zarządzanie", "Finanse i rachunkowość", "Marketing i sprzedaż"]
  }), /*#__PURE__*/React.createElement(TagInputDropdown, {
    label: "Miasto",
    placeholder: "Wybierz miasto",
    side: "right",
    options: ["Warszawa", "Kraków", "Wrocław", "Online"]
  })), /*#__PURE__*/React.createElement(TagInput, {
    label: "Obszary zainteresowa\u0144",
    defaultValue: ["Strategia", "Analityka"],
    placeholder: "Dodaj i naci\u015Bnij Enter",
    maxVisible: 4
  }), /*#__PURE__*/React.createElement(InputTextArea, {
    label: "Dlaczego chcesz studiowa\u0107 w ALK?",
    required: true,
    rows: 4,
    placeholder: "Napisz kilka zda\u0144 o swoich celach\u2026",
    message: "Maksymalnie 500 znak\xF3w."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: consent,
    onChange: setConsent,
    label: "Wyra\u017Cam zgod\u0119 na przetwarzanie danych osobowych",
    description: "Zgodnie z polityk\u0105 prywatno\u015Bci ALK, w celu przeprowadzenia procesu rekrutacji."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 16,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "large",
    disabled: !consent
  }, "Wy\u015Blij zg\u0142oszenie")))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      marginTop: 20,
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "Akademia Leona Ko\u017Ami\u0144skiego \xB7 Dzia\u0142 Rekrutacji")));
}
const sectionTitle = {
  margin: "0 0 12px",
  fontFamily: "var(--font-form)",
  fontWeight: 500,
  fontSize: 14,
  textTransform: "uppercase",
  letterSpacing: ".04em",
  color: "var(--text-muted)"
};
window.EnrollmentForm = EnrollmentForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/enrollment-form/EnrollmentForm.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.InputTextArea = __ds_scope.InputTextArea;

__ds_ns.TagInputDropdown = __ds_scope.TagInputDropdown;

__ds_ns.RadioTabs = __ds_scope.RadioTabs;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TagInput = __ds_scope.TagInput;

})();
